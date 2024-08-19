import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getReadList } from "../utils/main";
import ErrorState from "../components/Shared/ErrorState";

const PageToRead = () => {
   const [readList, setReadList] = useState([]);

   useEffect(() => {
      const storedData = getReadList();
      setReadList(storedData);
   }, []);

   const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
   const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${
         x + width / 2
      },${y + height / 3} ${x + width / 2}, ${y}C${x + width / 2},${
         y + height / 3
      } ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}Z`;
   };
   const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;

      return (
         <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
      );
   };

   if (readList.length < 1) {
      return (
         <ErrorState
            message={"No book added in your read list"}
            address="/"
            label="browse home page for book"
         />
      );
   }

   return (
      <>
         {/* desktop version */}
         <div className="hidden lg:grid lg:place-items-center max-w-full bg-gray-100  min-h-[calc(100vh-127px)] mt-6  rounded-lg">
            <BarChart
               width={850}
               height={380}
               data={readList}
               margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
               }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="author" />
               <YAxis dataKey="totalPages" />
               <Bar
                  dataKey="totalPages"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
               >
                  {readList.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))}
               </Bar>
            </BarChart>
         </div>

         {/* tablet version*/}
         <div className="hidden md:grid md:place-items-center lg:hidden max-w-full bg-gray-100  min-h-[calc(100vh-127px)] mt-6  rounded-lg">
            <BarChart
               width={650}
               height={290}
               data={readList}
               margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
               }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="author" />
               <YAxis dataKey="totalPages" />
               <Bar
                  dataKey="totalPages"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
               >
                  {readList.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))}
               </Bar>
            </BarChart>
         </div>

         {/* medium device */}
         <div className="hidden  sm:grid md:place-items-center md:hidden lg:hidden max-w-full bg-gray-100  min-h-[calc(100vh-127px)] mt-6  rounded-lg">
            <BarChart
               width={480}
               height={290}
               data={readList}
               margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
               }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="author" />
               <YAxis dataKey="totalPages" />
               <Bar
                  dataKey="totalPages"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
               >
                  {readList.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))}
               </Bar>
            </BarChart>
         </div>

         {/* extra small devices */}
         <div className="grid place-items-center sm:hidden md:hidden lg:hidden max-w-full bg-gray-100  min-h-[calc(100vh-127px)] mt-6  rounded-lg">
            <BarChart
               width={320}
               height={230}
               data={readList}
               margin={{
                  top: 20,
                  right: 10,
                  left: 10,
                  bottom: 5,
               }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="author" />
               <YAxis dataKey="totalPages" />
               <Bar
                  dataKey="totalPages"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
               >
                  {readList.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                  ))}
               </Bar>
            </BarChart>
         </div>
      </>
   );
};

export default PageToRead;
