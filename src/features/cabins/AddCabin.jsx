import React from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   function handleOpenModal() {
//     setIsOpenModal((prev) => !prev);
//   }
//   return (
//     <div>
//       <Button onClick={handleOpenModal}>Add new cabin</Button>

//       {isOpenModal && (
//         <Modal onCloseModal={handleOpenModal}>
//           <CreateCabinForm onCloseModal={handleOpenModal} />
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default AddCabin;
