
const useFormatDateTime = () =>{
    const getDateAndTime = (dtime) => {

        const dateTime = {
            date: "",
            time: ""
        };
    
        if (dtime) {
            const dt = dtime.substring(1, dtime.indexOf('T'));
            dateTime.date = dt.split("-").reverse().join("-");
    
    
    
            let time = dtime.substring(dtime.indexOf('T') + 1, dtime.indexOf('T') + 6);
    
            if (time) {
                let hours = parseInt(time.substr(0, 2));
                let min = time.substr(3, 2).trim();
    
    
                if (hours > 12 && hours != 24) {
                    hours = hours - 12;
                    time = `${hours}:${min} PM`;
                }
    
                else if (hours > 12 && hours == 24) {
                    hours = hours - 12;
                    time = `${hours}:${min} AM`;
    
                }
                else {
    
                    time = `${hours}:${min} AM`;
                }
    
            }
    
            dateTime.time = time;
    
    
    
        }
    
        return dateTime;
    };
    return{
        getDateAndTime
    }
}

export default useFormatDateTime;
