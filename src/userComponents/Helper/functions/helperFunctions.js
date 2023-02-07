export class helperFN {
    
    //#region FormatDate
        /** 
         * @name formatDate
         * @description Transforms the view of date
         * @param { Takes a data as "yyyy/mm/dd" } date 
         * @returns date as (Day month, year)
         * ####################################################
         * *EXAMPLE:
         * *    (2023/01/01) => (01 jun, 2023)
         */
        static formatDate = (date) => {
            const monthes = ["jun","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
            let year = date.substr(0,4);
            let month = parseInt(date.substr(5,2),10);
            let day = date.substr(8,2);
            return (day + " " + monthes[month-1] + ", " + year);
        }
    //#endregion


}