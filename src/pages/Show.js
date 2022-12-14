import React from "react"
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom"

function Show({culture, deleteCulture}) {
  const { id } = useParams();
  const cult = culture.find(cult => cult._id === id);
  let navigate = useNavigate()

const removeCult = () => {
    deleteCulture(id);
    navigate("/");
};

const updateCult = () => {
    // updateCulture(id);
    navigate(`/update/${cult._id}`);
};

return (
    <div className="cult">
      <h1>{cult.name}</h1>
      <img className="show-image" src={cult.url} alt={cult.name} />
      <h2>{cult.description}</h2>
      <h2>{cult.reason}</h2>
      <Button variant="primary" id="delete" onClick={removeCult}>
        DELETE
      </Button>
      <Button variant="primary" id="update" onClick={updateCult}>
        UPDATE
      </Button>
    </div>
  )
}

export default Show