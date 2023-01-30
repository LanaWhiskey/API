import { useEffect, useState } from "react";




function Activities() {
    function loadActivity() {
        setIsLoading(true); 
        fetch('https://www.boredapi.com/api/activity')
           .then((response) => response.json())
           .then((data) => {
              setActivities([...activities, data]);
              setIsLoading(false)
           });
    }


    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        loadActivity();
    }, []); 

    if (activities.legnth === 0) {
        return <h1>Wait for it...</h1>;
    }

    return (
        <div>
              <h1>WHAT TO DO IF NOTHING TO DO...</h1>
            <ul>
              {activities.map((activity) => {
                return <li key={activity.key}>{activity.activity}</li>
            })}
            </ul>
    <button disabled={isLoading} onClick={loadActivity}>And Another One</button>
    </div>
    );
}
export default Activities;