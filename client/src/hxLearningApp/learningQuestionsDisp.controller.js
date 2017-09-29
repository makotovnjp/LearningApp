/**
 * Created by sanolab on 2017/09/11.
 */
(function() {
        "use strict";
        angular.module('hxLearningApp')
            .controller('learningQuestionsController', learningQuestionsController);
            learningQuestionsController.$inject = ['$state','learningAppDataService'];
        function learningQuestionsController($state,learningAppDataService) {
            var $leQueDi = this;
            var service= learningAppDataService;
            $leQueDi.printedCheck="Check learningQuestionController ok!";
            var dummyData=[{
                categories: "teeth",
                number:1,
                year:2017,
                description: "the question about teeth",
                question:"this is question content",
                answers: [
                    {
                        number: 1,
                        content: 'The answer 1'
                    },

                    {
                        number: 2,
                        content: 'The answer 2'
                    },

                    {
                        number: 3,
                        content: 'The answer 3'
                    },

                    {
                        number: 4,
                        content: 'The answer 4'
                    }
                ] ,
                correctAnswer: 1,
                explanation:'this is the explanation for the question',
                rating:{
                  like: 1,
                  dislike:0
                },
                image :'images/teeth.jpeg'
            },
                {
                    categories: "lung",
                    number:2,
                    year:2017,
                    description: "the question about teeth",
                    question:"this is question content",
                    answers: [
                        {
                            number: 1,
                            content: 'The answer 1'
                        },

                        {
                            number: 2,
                            content: 'The answer 2'
                        },

                        {
                            number: 3,
                            content: 'The answer 3'
                        },

                        {
                            number: 4,
                            content: 'The answer 4'
                        }
                    ] ,
                    image :'images/lung.jpeg',
                    correctAnswer: 2,
                    explanation:'this is the explanation for the question',
                    rating:{
                      like: 2,
                      dislike:0
                    }
                }
            ];

            $leQueDi.index=learningAppDataService.tempIndex;
            $leQueDi.dataDummy=dummyData[$leQueDi.index];
            $leQueDi.isRight=function () {
              learningAppDataService.numberCorrect++;
            };
            $leQueDi.next = function () {
                $leQueDi.index++;
                $leQueDi.dataDummy=dummyData[$leQueDi.index];
                learningAppDataService.tempIndex= $leQueDi.index;
                // learningAppDataService.numberCorrect++;
            };

            $leQueDi.back = function () {
                $leQueDi.index--;
                $leQueDi.dataDummy=dummyData[$leQueDi.index];

                learningAppDataService.tempIndex= $leQueDi.index;
            };

            $leQueDi.challenge = function (obj) {
                service.challenge=obj;
                $state.go('hxLearningApp.challenge', {challengeQuestion: obj});
            };
            console.log('inside the learningQuestionsController');

        }
    }
)();
