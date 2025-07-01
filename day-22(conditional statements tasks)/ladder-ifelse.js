// the performance level based on score
function performanceLevel(score) {
    if (score >= 90) {
        return 'Excellent';
    } else if (score >= 75) {
        return 'Good';
    } else if (score >= 50) {
        return 'Average';
    } else {
        return 'Poor';
    }
}

console.log(performanceLevel(72)); 