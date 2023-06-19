import "./TripStyle.css"
import TripData from "./TripData";
import Trip1 from "./Assets/5.jpg"
import Trip2 from "./Assets/8.jpg"
import Trip3 from "./Assets/6.jpg"


function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Trip in Indonesia"
                text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. If consists of over 17,000 islands, inculuding Sumatra, Java, Sulawesi, and Parts of Borneo and New Guinea."

                />

                <TripData
                image={Trip2}
                heading="Trip in Malaysia"
                text="Malaysia is a Southeast Asian Country occupying parts of the Malay Peninsula and the island of Borneo it's beaches, rainforest and mix of malay, Chinese Indian and European cultural influences."

                />

                <TripData
                image={Trip3}
                heading="Trip in France"
                text="France in western European encompasses medieval cities, alpine villages and Mediterranean beaches Paris its Capital is famed for its fashion houses, classical art museums including the laurve and moonuments like the Eiffel Tower."

                />
            </div> 
        </div>
    )
}

export default Trip;