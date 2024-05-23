// import musicim1 from '../assets/musicim1.jpg'
// import styled from 'styled-components'


const WorkoutDetails = ({workout}) => {

    // const StyledCard = styled.div`
    // max-width: 300px;
    // margin: 20px;
    // padding: 15px;
    // border: 1px solid #ddd;
    // border-radius: 8px;
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    // background-color: #fff;
    // text-align: center;
    // transition: transform 0.3s ease-in-out;

    // /* Optional: Add hover effect */
    // cursor: pointer;
    // `;

    return (

        <div className="workout-details" style={{backgroundImage:`url(${workout.img})`}}  >
        
        
            <div className="info-group">
                {/* <img src=""/> */}
                <h3>{workout.title}</h3>
                <p><strong>Load (kg): </strong>{workout.load}</p>
                {/* <img src=""/> */}
                <p><strong>Reps: </strong>{workout.reps}</p>

            </div>
            {/* <div className="info-group">
                <img src=""/>
                <p><strong>Reps: </strong>{workout.reps}</p>

            </div>
            */}
            {/* <p>{workout.createdAt}</p> */}
        </div>
    )


}

export default WorkoutDetails