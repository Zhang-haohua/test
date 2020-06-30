export const getChatSource = () => {
    const results = [];
    let currentTime = new Date().getTime() - 10000000;
    for(let i=0;i<100;i++) {
        results.push({time: new Date(currentTime), msg: `Message "${i}`});
        currentTime++;
    }

    return results;
}