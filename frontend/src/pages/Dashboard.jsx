import { useEffect, useState } from "react";

import {
   healthCheck,
   dbCheck
}
from "../services/systemService.js";

function Dashboard() {

   const [health,setHealth] =
      useState("");

   const [database,setDatabase] =
      useState("");

   useEffect(() => {

      getStatus();

   }, []);


   const getStatus = async () => {

      try {

         const healthRes =
            await healthCheck();

         const dbRes =
            await dbCheck();

         setHealth(
            healthRes.data.status
         );

         setDatabase(
            dbRes.data.database
         );

      } catch(error) {

         console.error(error);

      }
   };

   return (

      <div>

         <h2>Contract Guardian</h2>

         <h3>
            API Status : {health}
         </h3>

         <h3>
            Database : {database}
         </h3>

      </div>

   );
}

export default Dashboard;





