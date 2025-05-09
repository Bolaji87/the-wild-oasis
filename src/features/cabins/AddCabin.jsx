import React, { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
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
