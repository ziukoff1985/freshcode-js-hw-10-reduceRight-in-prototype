'use strict';

/**
 * Calculates the winner's new rating after a match.
 * @param {number} winnerRate - winner's current rating
 * @param {number} loserRate - loser's current rating
 * @returns {number} - new winner rating
 */
function calcNewRate(winnerRate, loserRate) {
    if (
        !Number.isFinite(winnerRate) ||
        !Number.isFinite(loserRate) ||
        winnerRate < 0 ||
        loserRate < 0
    ) {
        console.log(
            `❌ Incorrect input: (${winnerRate}, ${loserRate}) - ratings must be valid non-negative numbers`
        );
        return NaN;
    }

    if (winnerRate === 0) {
        const newRating = Number(loserRate.toFixed(1));
        console.log(`✅ Winner's new rating: ${newRating} points`);
        return newRating;
    }

    let increase;
    const diff = winnerRate - loserRate;

    if (winnerRate >= loserRate) {
        if (diff >= 0 && diff <= 2) increase = 2;
        else if (diff > 2 && diff < 20) increase = 1;
        else increase = 0;
    } else {
        increase = (loserRate - winnerRate + 5) / 3;
    }

    const newRating = Number((winnerRate + increase).toFixed(1));
    console.log(`✅ Winner's new rating: ${newRating} points`);
    return newRating;
}

calcNewRate(10, 10);
calcNewRate(30, 11);
calcNewRate(30, 10);
calcNewRate(10, 15);
calcNewRate(10, '20');
calcNewRate(0, 15);
