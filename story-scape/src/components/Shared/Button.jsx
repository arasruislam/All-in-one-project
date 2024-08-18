const Button = ({
   children,
   primary,
   secondary,
   primaryOutline,
   secondaryOutline,
   round,
   onClick,
}) => {
   return (
      <>
         <button
            onClick={onClick}
            className={`${
               primary &&
               "btn bg-[#23BE0A] hover:bg-[#1da208]  border-none text-white font-bold"
            } ${
               secondary &&
               "btn bg-[#50B1C9] hover:bg-[#3897af] border-none text-white font-bold"
            } ${
               primaryOutline &&
               "btn border border-[#23BE0A] bg-white asru_primary font-bold transition-color hover:bg-[#23BE0A] hover:border-[#23BE0A] hover:text-white"
            } ${
               secondaryOutline &&
               "btn border border-[#50B1C9] asru_secondary bg-white font-bold transition-color hover:bg-[#50B1C9] hover:border-[#50B1C9] hover:text-white"
            } ${round && 'rounded-full'}`}
         >
            {children}
         </button>
      </>
   );
};

export default Button;
