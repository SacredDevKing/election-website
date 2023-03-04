$(document).ready(function () {
    var noVoteFlag = false;
    var selectedStateArr = [];
    var candidateNoArr = [];

    var candidates = $('.candi-checkbox');
    if (candidates.length > 0) {
        for (var i = 0; i < candidates.length; i++) {
            candidateNoArr[i] = $(candidates[i]).attr('data-candi-id');
            selectedStateArr[i] = false;
        }
    }

    console.log(candidateNoArr, selectedStateArr)

    /*
    *   Log out function
    */
    $('.btn-log-out').click(function () {
        doLogout();
    })

    /*
    *   Reset function
    *   Clear all selected candidates
    */
    $('.btn-reset').click(function () {
        var arr = $('.checker span');
        for (var i = 0; i < arr.length; i++) {
            const item = arr[i];
            $(item).removeClass('checked');
        }

        var checkboxs = document.getElementsByClassName('candi-checkbox');
        for (var i in checkboxs) {
            var checkbox = checkboxs[i];
            checkbox.checked = false;
        }
        $('#no_vote_selected').attr('checked', false)
    })

    /*
    *   Vote function
    *   candidates validation && send data to vote
    */
    $('.btn-vote').click(function () {
        var candidateCnt = 0;
        console.log(selectedStateArr)
        for (var i in selectedStateArr) {
            if (selectedStateArr[i] == true) {
                candidateCnt++;
            }
        }

        if (candidateCnt > 2) {
            swal({
                title: "Are you sure?",
                text: "You can not select up 2 candidates!",
                type: "error",
                confirmButtonClass: 'btn-danger',
                confirmButtonText: 'Got it'
            });
            return;
        }

        if (noVoteFlag == true && candidateCnt > 0) {
            swal({
                title: "Wrong action!",
                text: "You can not select anyone because you already selected no vote!",
                type: "warning",
                confirmButtonClass: 'btn-warning',
                confirmButtonText: 'Got it'
            });

            return;
        }

        if (candidateCnt == 0 || noVoteFlag) {
            swal({
                title: "Are you sure?",
                text: "You will not vote anyone in this event!",
                type: "info",
                showCancelButton: true,
                confirmButtonClass: 'btn-info',
                confirmButtonText: 'Yes'
            }, function () {
                var formData = {
                    candidates: ['0']
                };

                $.ajax({
                    url: BASE_URL + 'vote/addVote',
                    type: "POST",
                    data: formData,
                    success: function (data) {
                        data = JSON.parse(data);

                        if (data['status'] == 'failed') {
                            $errors = data['errors'];
                            return;
                        }

                        if (data['status'] == 'success') {
                            swal({
                                title: "You voted successfully!",
                                text: "Press 'OK', redirect to Waiting vote ending page",
                                type: "success",
                                confirmButtonClass: 'btn-success',
                                confirmButtonText: 'OK',
                                closeOnConfirm: false,
                                closeOnCancel: false
                            },
                                function (isConfirm) {
                                    if (isConfirm) {
                                        window.location.href = 'waiting-end';
                                    }
                                })
                        }
                    },
                    error: function (err) {
                        new PNotify({
                            title: 'Failed',
                            icon: 'icon-blocked',
                            text: 'Network connection is failed.',
                            addclass: 'bg-danger'
                        });
                    }
                });
            });
        }

        if (noVoteFlag == false && candidateCnt > 0 && candidateCnt < 3) {
            var candidatesPostData = [];
            for (var i = 0; i < selectedStateArr.length; i++) {
                if (selectedStateArr[i] == true) {
                    candidatesPostData.push(candidateNoArr[i]);
                }
            }

            swal({
                title: "Will you vote " + candidateCnt + " candidate(s)?",
                type: "success",
                showCancelButton: true,
                confirmButtonClass: 'btn-success',
                confirmButtonText: 'Yes'
            }, function () {
                var formData = {
                    candidates: candidatesPostData
                };

                $.ajax({
                    url: BASE_URL + 'vote/addVote',
                    type: "POST",
                    data: formData,
                    success: function (data) {
                        data = JSON.parse(data);

                        if (data['status'] == 'failed') {
                            $errors = data['errors'];
                            return;
                        }
                        if (data['status'] == 'success') {
                            swal({
                                title: "You voted successfully!",
                                text: "Press 'OK', redirect to Waiting vote ending page",
                                type: "success",
                                confirmButtonClass: 'btn-success',
                                confirmButtonText: 'OK',
                                closeOnConfirm: false,
                                closeOnCancel: false
                            },
                                function (isConfirm) {
                                    if (isConfirm) {
                                        window.location.href = 'waiting-end';
                                    }
                                })
                        }
                    },
                    error: function (err) {
                        new PNotify({
                            title: 'Failed',
                            icon: 'icon-blocked',
                            text: 'Network connection is failed.',
                            addclass: 'bg-danger'
                        });
                    }
                });
            });
        }
    })

    /*
    *   No ote function
    *   Clear selected candidates and votes no one
    */
    $('#no_vote_selected').change(function (e) {
        noVoteFlag = !noVoteFlag;

        if (e.target.checked == true) {
            var arr = $('.candidates-container .checker span');
            for (var i = 0; i < arr.length; i++) {
                const item = arr[i];
                $(item).removeClass('checked');
            }

            var checkboxs = document.getElementsByClassName('candi-checkbox');
            for (var i in checkboxs) {
                var checkbox = checkboxs[i];
                checkbox.checked = false;
            }

            for (var i = 0; i < selectedStateArr.length; i++) {
                selectedStateArr[i] = false;
            }
        }
    })

    /*
    *   Handle Check function
    */
    $('.candi-checkbox').change(function (e) {
        console.log($(this).attr('data-candi-id'))
        var index = candidateNoArr.indexOf($(this).attr('data-candi-id'));
        selectedStateArr[index] = !selectedStateArr[index];
    })
});