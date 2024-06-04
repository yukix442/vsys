const ranks = ['アイアン1', 'アイアン2', 'アイアン3', 'ブロンズ1', 'ブロンズ2', 'ブロンズ3', 'シルバー1', 'シルバー2', 'シルバー3', 'ゴールド1', 'ゴールド2', 'ゴールド3', 'プラチナ1', 'プラチナ2', 'プラチナ3', 'ダイヤ1', 'ダイヤ2', 'ダイヤ3', 'アセンダント1', 'アセンダント2', 'アセンダント3', 'イモータル1', 'イモータル2', 'イモータル3', 'レディアント'];

window.onload = function() {
    for(let i=1; i<=5; i++) {
        const select = document.getElementById('rank' + i);
        ranks.forEach(rank => {
            const option = document.createElement('option');
            option.text = rank;
            option.value = ranks.indexOf(rank) + 1;
            select.add(option);
        });
    }
}

function calculateAverage() {
    let total = 0;
    for(let i=1; i<=5; i++) {
        total += parseInt(document.getElementById('rank' + i).value);
    }
    const average = Math.round(total / 5);
    document.getElementById('result').innerText = '平均ランク: ' + ranks[average - 1];
}
