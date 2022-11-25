import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
function App() {
  // const [name, setName] = useState("Avinash");
  // const [count, setCount] = useState(0);
  const [events, setEvents] = useState([
    { title: "Avinash Birthday", id: 1 },
    { title: "Sameer Birthday", id: 2 },
    { title: "Saish Birthday", id: 3 },
  ]);
  const [showEvents, setShowEvents] = useState(true);

  const [showModal, setShowModal] = useState(false);

  // console.log(showEvents);
  console.log(showModal);

  // let name = "Avinash";

  const handleDelete = (id) => {
    // name = "abhijeet";
    // console.log(name);
    // setName("Abhijeet");
    // setCount(count + 1);
    // console.log(id);
    // setEvents(
    //   events.filter((event) => {
    //     return id !== event.id;
    //   })
    // );

    //Best Practice
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };
  const subTitle = "Birthday of the year";

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="App">
      <Title title="Birthday insights" subTitle={subTitle} />
      {/* <Title title="Birthday " subTitle="abc" /> */}

      {showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(false);
            }}
          >
            Hide Event
          </button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button
            onClick={() => {
              setShowEvents(true);
            }}
          >
            Show Event
          </button>
        </div>
      )}
      {/* <h1>Hello {name}</h1> */}
      {/* <h1>{count}</h1> */}
      {/* <button onClick={handleClick}>Click Me</button> */}
      {showEvents &&
        events.map((item, index) => (
          <div key={item.id}>
            <h2>
              {index} -{item.title}
            </h2>
            <button onClick={() => handleDelete(item.id)}>Delete Event</button>
          </div>
        ))}

      <div>
        <button onClick={handleShowModal}>Show Modal</button>
      </div>
      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>10% off on coupon code</h2>
          <p>use the code NINJA10 at the checkout</p>
        </Modal>
      )}
      {/* <Modal>
        <h2>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, mollitia.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          voluptates fugiat adipisci mollitia, minima quidem excepturi ipsum rem
          aliquid omnis exercitationem eveniet similique inventore atque
          tempora? Neque perferendis, provident expedita qui dolorum quas non,
          nesciunt dolorem doloribus aspernatur ducimus minima!
        </p>
      </Modal> */}
    </div>
  );
}

export default App;
