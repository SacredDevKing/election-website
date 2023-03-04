$(document).ready(function () {
    /*
    *   Log out function
    */
    $('.btn-log-out').click(function () {
        doLogout();
    })

    /*
    *  Draw chart
    */
    var candidates = $('.candidate .profile-flat .candi-name');
    var voteCnts = $('.candidate .profile-flat .vote-cnt');
    var chartData = [];
    for (var i = 0; i < candidates.length; i++) {
        var item = [];
        var candiName = $(candidates[i]).attr('data-candi-name');
        var voteCnt = Number($(voteCnts[i]).attr('data-vote-cnt'));
        item.push(candiName);
        item.push(voteCnt);
        chartData.push(item);
    }

    // Generate chart
    var pie_chart = c3.generate({
        bindto: '#c3-pie-chart',
        size: { width: 350 },
        color: {
            pattern: ['#3F51B5', '#FF9800', '#4CAF50', '#00BCD4', '#F44336']
        },
        data: {
            columns: chartData,
            type: 'pie'
        }
    });
});