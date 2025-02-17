import React, { useState, Dispatch, SetStateAction, SyntheticEvent, useContext } from 'react';
import { actionStore } from '@/redux/action';
import { ContextDispatch } from '@/redux/store';
import { Offcanvas, Button, Form, Spinner } from '../../@material';
import toast from 'react-hot-toast';

export interface CellFormData {
  data: any;
  key?: string;
  index?: number;
  rowNumber?: number;
  action: 'add' | 'edit';
};

interface CellFormParams {
  show: boolean;
  formData: CellFormData;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const CellForm = ({ show, setShow, formData }: CellFormParams) => {
  const dispatch = useContext(ContextDispatch);
  const [sheetForm, setSheetForm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSingleInput, setShowSingleInput] = useState(true);

  const isActionEdit = formData.action === 'edit';
  const handleShow = () => setShow(true);

  const handleClose = () => {
    setShow(false);
    setSheetForm({});
    setShowSingleInput(true);
  };

  const handleChange = (event: any) => {
    const target = event.target;
    setSheetForm({ ...sheetForm, [target.name]: target.value });
  }

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(sheetForm);

    if (Object.keys(sheetForm).length) {
      setIsLoading(true);
      const data = { data: sheetForm, index: formData.index };

      const response = await fetch('/api/sheet/row-curd', {
        method: 'PUT',
        body: JSON.stringify(data)
      });
      const rows = await response.json();

      if (response.status !== 200) {
        toast.error(rows.message);
      } else {
        dispatch({ type: actionStore.UPDATE_SHEET_ROWS, payload: rows.data });
        handleClose(); // Close offconves
      }

      setIsLoading(false);
    } else {
      toast.error('Change any field to save !!');
    }
  }

  return (
    <React.Fragment>
      <Offcanvas show={show} placement='end' onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Edit Sheet Row</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Form>
            {Object.keys(formData.data).map((key, index) => {
              return (
                <Form.Group
                  key={`form-${formData.rowNumber}-${index}`}
                  controlId={`input-${formData.rowNumber}-${index}`}
                  className={`mb-2${(isActionEdit && formData.key !== key && showSingleInput) ? ' d-none' : ''}`}
                >
                  <Form.Label className="small mb-1">{key}</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    name={key}
                    onChange={handleChange}
                    defaultValue={formData.data[key]}
                  />
                </Form.Group>
              )
            })}

            <div className="container">
              <div className="row">
                {showSingleInput &&
                  <div className="col text-left">
                    <Button variant="link" onClick={() => setShowSingleInput(false)}>Edit rest</Button>
                  </div>
                }

                <div className="col text-end">
                  <Button variant="secondary" onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ?
                      <React.Fragment>
                        {'Saving '}
                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                        <span className="visually-hidden">Loading...</span>
                      </React.Fragment>
                      : 'Save'
                    }
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
}

export default CellForm;
