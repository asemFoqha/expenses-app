import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Group, addGroup } from "../services/homeService/groupService";

interface Props {
  groups: Group[];
  setGroups: (groups: Group[]) => void;
}

function AddGroupModal({ groups, setGroups }: Props) {
  const [show, setShow] = useState(false);
  const title = useRef<HTMLInputElement>(null);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    return setValidated(false);
  }, [show]);

  const handleAddGorup = () => {
    const value = title.current?.value;
    if (value && value?.trim().length >= 0) {
      addGroup(value).then(({ data: { data } }) => {
        const dto: Group = {
          title: data.title,
          _id: data._id,
          __v: data.__v,
        };

        setGroups([dto, ...groups]);
      });

      handleClose();
    } else {
      setValidated(true);
      return;
    }
  };

  return (
    <>
      <Button
        className="add-group-button"
        variant="primary"
        onClick={handleShow}
      >
        Add Group
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            noValidate
            validated={validated}
            onSubmit={(e) => {
              e.preventDefault();
              handleAddGorup();
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Group 1"
                autoFocus
                ref={title}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" onClick={handleAddGorup} variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddGroupModal;
