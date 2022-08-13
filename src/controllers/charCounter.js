import count from "./count.js"

const charCounter = async () => {
    const response = { exercise_name: '', time: null, in_time: null, results: null };
    const result = [];
    const time = new Date();
    try {
        result.push(await count('l', 'location'));
        result.push(await count('e', 'episode'));
        result.push(await count('c', 'character'));
      } catch (error) {
        console.log(error);
      } finally {
        const seconds = Math.floor((new Date() - time) / 1000);
        const milliseconds = Math.abs((new Date() - time) / 100);

        response.exercise_name = 'Char counter'
        response.time = `${seconds}s ${milliseconds}ms`
        if(seconds<=3){
            response.in_time=true
        }else{
            response.in_time=false
        }
        response.results = result
        console.log(response)
        return response
    }
}

export default charCounter