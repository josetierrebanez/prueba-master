      var app = angular.module("busqueda", []); 
      app.controller("myCtrl", ['$scope', '$filter', '$http', function ($scope, $filter, $http){
       $scope.names=[
            {"first_name":"Ruby","last_name":"Mcdonald","email":"rmcdonald0@addthis.com","fecha_inicio":"03/09/2016","total":"$5420.82"},
            {"first_name":"Fred","last_name":"Stephens","email":"fstephens1@cloudflare.com","fecha_inicio":"23/02/2017","total":"$1450.57"},
            {"first_name":"Andrea","last_name":"Kelley","email":"akelley2@nbcnews.com","fecha_inicio":"07/07/2016","total":"$1243.25"},
            {"first_name":"Pamela","last_name":"Knight","email":"pknight3@nature.com","fecha_inicio":"14/12/2016","total":"$6105.83"},
            {"first_name":"Wanda","last_name":"Tucker","email":"wtucker4@sohu.com","fecha_inicio":"06/07/2016","total":"$4890.03"},
            {"first_name":"David","last_name":"Webb","email":"dwebb5@so-net.ne.jp","fecha_inicio":"16/03/2016","total":"$588.96"},
            {"first_name":"Craig","last_name":"Barnes","email":"cbarnes6@nationalgeographic.com","fecha_inicio":"10/04/2016","total":"$9198.89"},
            {"first_name":"Frank","last_name":"Romero","email":"fromero7@nasa.gov","fecha_inicio":"14/04/2016","total":"$8331.96"},
            {"first_name":"Ruth","last_name":"Knight","email":"rknight8@usatoday.com","fecha_inicio":"21/01/2017","total":"$4485.57"},
            {"first_name":"Phyllis","last_name":"Bailey","email":"pbailey9@upenn.edu","fecha_inicio":"20/11/2016","total":"$3741.12"},
            {"first_name":"Benjamin","last_name":"Larson","email":"blarsona@e-recht24.de","fecha_inicio":"06/05/2016","total":"$7838.69"},
            {"first_name":"Lisa","last_name":"Foster","email":"lfosterb@google.ca","fecha_inicio":"02/07/2016","total":"$5901.94"},
            {"first_name":"Pamela","last_name":"Wallace","email":"pwallacec@amazonaws.com","fecha_inicio":"03/07/2016","total":"$2263.21"},
            {"first_name":"Robin","last_name":"Mccoy","email":"rmccoyd@phpbb.com","fecha_inicio":"27/02/2016","total":"$7478.50"},
            {"first_name":"Thomas","last_name":"Nelson","email":"tnelsone@sfgate.com","fecha_inicio":"19/11/2016","total":"$266.28"},
            {"first_name":"Amanda","last_name":"Walker","email":"awalkerf@constantcontact.com","fecha_inicio":"08/02/2017","total":"$9812.40"},
            {"first_name":"Ronald","last_name":"Johnston","email":"rjohnstong@sun.com","fecha_inicio":"21/05/2016","total":"$928.77"},
            {"first_name":"Anna","last_name":"Hudson","email":"ahudsonh@cbslocal.com","fecha_inicio":"20/10/2016","total":"$6806.05"},
            {"first_name":"Marie","last_name":"Ortiz","email":"mortizi@biglobe.ne.jp","fecha_inicio":"11/04/2016","total":"$8218.46"},
            {"first_name":"Paul","last_name":"Moore","email":"pmoorej@squarespace.com","fecha_inicio":"07/02/2017","total":"$1235.24"},
            {"first_name":"Amy","last_name":"Schmidt","email":"aschmidtk@hexun.com","fecha_inicio":"18/04/2016","total":"$9468.23"},
            {"first_name":"Matthew","last_name":"Gonzalez","email":"mgonzalezl@cbc.ca","fecha_inicio":"25/11/2016","total":"$272.41"},
            {"first_name":"Brandon","last_name":"Campbell","email":"bcampbellm@dedecms.com","fecha_inicio":"05/12/2016","total":"$5494.99"},
            {"first_name":"Frank","last_name":"Griffin","email":"fgriffinn@ycombinator.com","fecha_inicio":"08/08/2016","total":"$4683.75"},
            {"first_name":"Gloria","last_name":"Grant","email":"ggranto@amazon.com","fecha_inicio":"10/11/2016","total":"$8153.08"},
            {"first_name":"Stephanie","last_name":"Fernandez","email":"sfernandezp@parallels.com","fecha_inicio":"06/05/2016","total":"$5180.07"},
            {"first_name":"Kathleen","last_name":"James","email":"kjamesq@nbcnews.com","fecha_inicio":"20/08/2016","total":"$2209.81"},
            {"first_name":"Stephanie","last_name":"Cooper","email":"scooperr@joomla.org","fecha_inicio":"15/02/2017","total":"$5770.87"},
            {"first_name":"Diane","last_name":"Reyes","email":"dreyess@weibo.com","fecha_inicio":"02/01/2017","total":"$7726.87"},
            {"first_name":"Melissa","last_name":"Bryant","email":"mbryantt@google.fr","fecha_inicio":"15/07/2016","total":"$3818.64"},
            {"first_name":"Jean","last_name":"Nguyen","email":"jnguyenu@sogou.com","fecha_inicio":"03/11/2016","total":"$5051.12"},
            {"first_name":"Sarah","last_name":"Harrison","email":"sharrisonv@nbcnews.com","fecha_inicio":"09/06/2016","total":"$9514.43"},
            {"first_name":"Martha","last_name":"Mills","email":"mmillsw@bloglines.com","fecha_inicio":"21/04/2016","total":"$5271.44"},
            {"first_name":"Judith","last_name":"Williamson","email":"jwilliamsonx@webeden.co.uk","fecha_inicio":"16/01/2017","total":"$2183.30"},
            {"first_name":"Fred","last_name":"Martinez","email":"fmartinezy@topsy.com","fecha_inicio":"28/03/2016","total":"$1283.67"},
            {"first_name":"Mary","last_name":"Perkins","email":"mperkinsz@goo.gl","fecha_inicio":"24/10/2016","total":"$3184.03"},
            {"first_name":"Shawn","last_name":"Dean","email":"sdean10@nhs.uk","fecha_inicio":"26/09/2016","total":"$3324.60"},
            {"first_name":"Tina","last_name":"Sanchez","email":"tsanchez11@usa.gov","fecha_inicio":"02/07/2016","total":"$3345.18"},
            {"first_name":"Ruby","last_name":"Grant","email":"rgrant12@bbc.co.uk","fecha_inicio":"02/12/2016","total":"$3342.73"},
            {"first_name":"Christina","last_name":"Lopez","email":"clopez13@wufoo.com","fecha_inicio":"29/11/2016","total":"$4265.83"},
            {"first_name":"Tina","last_name":"Collins","email":"tcollins14@discovery.com","fecha_inicio":"07/11/2016","total":"$6433.87"},
            {"first_name":"Harry","last_name":"Tucker","email":"htucker15@delicious.com","fecha_inicio":"10/12/2016","total":"$3753.05"},
            {"first_name":"Maria","last_name":"Grant","email":"mgrant16@google.co.jp","fecha_inicio":"15/05/2016","total":"$3719.23"},
            {"first_name":"Deborah","last_name":"Black","email":"dblack17@google.com.br","fecha_inicio":"09/07/2016","total":"$5128.52"},
            {"first_name":"Richard","last_name":"Peters","email":"rpeters18@mayoclinic.com","fecha_inicio":"06/11/2016","total":"$841.88"},
            {"first_name":"Patricia","last_name":"Sanchez","email":"psanchez19@hostgator.com","fecha_inicio":"13/07/2016","total":"$9065.74"},
            {"first_name":"Laura","last_name":"Payne","email":"lpayne1a@time.com","fecha_inicio":"30/09/2016","total":"$8785.58"},
            {"first_name":"Jacqueline","last_name":"Williams","email":"jwilliams1b@issuu.com","fecha_inicio":"10/04/2016","total":"$6415.71"},
            {"first_name":"Justin","last_name":"Mitchell","email":"jmitchell1c@csmonitor.com","fecha_inicio":"28/07/2016","total":"$9419.43"},
            {"first_name":"Louis","last_name":"Burns","email":"lburns1d@icio.us","fecha_inicio":"31/01/2017","total":"$4426.98"},
            {"first_name":"Johnny","last_name":"Brooks","email":"jbrooks1e@seattletimes.com","fecha_inicio":"11/10/2016","total":"$1614.88"},
            {"first_name":"Ernest","last_name":"Taylor","email":"etaylor1f@cdbaby.com","fecha_inicio":"27/11/2016","total":"$479.74"},
            {"first_name":"Irene","last_name":"Berry","email":"iberry1g@furl.net","fecha_inicio":"25/11/2016","total":"$3138.92"},
            {"first_name":"Chris","last_name":"Dunn","email":"cdunn1h@51.la","fecha_inicio":"24/07/2016","total":"$1801.63"},
            {"first_name":"Judy","last_name":"Richards","email":"jrichards1i@delicious.com","fecha_inicio":"05/09/2016","total":"$4514.23"},
            {"first_name":"Ralph","last_name":"Cox","email":"rcox1j@indiatimes.com","fecha_inicio":"20/01/2017","total":"$6601.42"},
            {"first_name":"Randy","last_name":"Boyd","email":"rboyd1k@dot.gov","fecha_inicio":"12/11/2016","total":"$745.68"},
            {"first_name":"Betty","last_name":"Russell","email":"brussell1l@mysql.com","fecha_inicio":"21/09/2016","total":"$5068.48"},
            {"first_name":"Heather","last_name":"Watkins","email":"hwatkins1m@springer.com","fecha_inicio":"11/05/2016","total":"$8475.23"},
            {"first_name":"Teresa","last_name":"Watson","email":"twatson1n@jiathis.com","fecha_inicio":"13/04/2016","total":"$4585.72"},
            {"first_name":"George","last_name":"Brown","email":"gbrown1o@weibo.com","fecha_inicio":"10/07/2016","total":"$6232.37"},
            {"first_name":"Norma","last_name":"Jacobs","email":"njacobs1p@godaddy.com","fecha_inicio":"06/04/2016","total":"$9404.13"},
            {"first_name":"Carlos","last_name":"Pierce","email":"cpierce1q@google.es","fecha_inicio":"29/01/2017","total":"$7397.49"},
            {"first_name":"Willie","last_name":"Scott","email":"wscott1r@earthlink.net","fecha_inicio":"20/08/2016","total":"$983.96"},
            {"first_name":"Jimmy","last_name":"Gonzales","email":"jgonzales1s@de.vu","fecha_inicio":"31/05/2016","total":"$8117.15"},
            {"first_name":"Kenneth","last_name":"Fernandez","email":"kfernandez1t@netvibes.com","fecha_inicio":"03/03/2016","total":"$206.27"},
            {"first_name":"Diane","last_name":"Myers","email":"dmyers1u@feedburner.com","fecha_inicio":"30/10/2016","total":"$9154.92"},
            {"first_name":"Jean","last_name":"Welch","email":"jwelch1v@163.com","fecha_inicio":"14/02/2017","total":"$360.73"},
            {"first_name":"Diana","last_name":"Young","email":"dyoung1w@dedecms.com","fecha_inicio":"07/10/2016","total":"$5545.05"},
            {"first_name":"Linda","last_name":"Hicks","email":"lhicks1x@huffingtonpost.com","fecha_inicio":"21/04/2016","total":"$6022.73"},
            {"first_name":"Ronald","last_name":"Shaw","email":"rshaw1y@taobao.com","fecha_inicio":"21/04/2016","total":"$4066.57"},
            {"first_name":"Jason","last_name":"Duncan","email":"jduncan1z@google.nl","fecha_inicio":"06/08/2016","total":"$7719.69"},
            {"first_name":"Russell","last_name":"Gray","email":"rgray20@youku.com","fecha_inicio":"14/10/2016","total":"$7316.25"},
            {"first_name":"Karen","last_name":"Alvarez","email":"kalvarez21@unesco.org","fecha_inicio":"17/04/2016","total":"$2401.92"},
            {"first_name":"Catherine","last_name":"Davis","email":"cdavis22@amazon.co.jp","fecha_inicio":"12/02/2017","total":"$8660.02"},
            {"first_name":"Jerry","last_name":"Williamson","email":"jwilliamson23@cbsnews.com","fecha_inicio":"16/11/2016","total":"$1134.43"},
            {"first_name":"Mildred","last_name":"Sanchez","email":"msanchez24@fema.gov","fecha_inicio":"15/11/2016","total":"$9578.12"},
            {"first_name":"Ryan","last_name":"Owens","email":"rowens25@bluehost.com","fecha_inicio":"13/02/2017","total":"$6936.71"},
            {"first_name":"Judith","last_name":"Stevens","email":"jstevens26@sogou.com","fecha_inicio":"10/02/2017","total":"$915.99"},
            {"first_name":"Ryan","last_name":"Stanley","email":"rstanley27@shop-pro.jp","fecha_inicio":"10/02/2017","total":"$7271.99"},
            {"first_name":"Eugene","last_name":"Dunn","email":"edunn28@jiathis.com","fecha_inicio":"26/06/2016","total":"$3394.23"},
            {"first_name":"Beverly","last_name":"Stewart","email":"bstewart29@yandex.ru","fecha_inicio":"18/06/2016","total":"$6803.21"},
            {"first_name":"Jonathan","last_name":"Ford","email":"jford2a@imdb.com","fecha_inicio":"03/06/2016","total":"$3132.79"},
            {"first_name":"Diane","last_name":"Webb","email":"dwebb2b@vkontakte.ru","fecha_inicio":"18/05/2016","total":"$4957.60"},
            {"first_name":"Amanda","last_name":"Jenkins","email":"ajenkins2c@imdb.com","fecha_inicio":"26/08/2016","total":"$2215.70"},
            {"first_name":"Paula","last_name":"Hernandez","email":"phernandez2d@paginegialle.it","fecha_inicio":"14/05/2016","total":"$6877.63"},
            {"first_name":"Walter","last_name":"Alvarez","email":"walvarez2e@nsw.gov.au","fecha_inicio":"26/12/2016","total":"$1648.06"},
            {"first_name":"Diana","last_name":"Reed","email":"dreed2f@macromedia.com","fecha_inicio":"06/05/2016","total":"$1412.43"},
            {"first_name":"Albert","last_name":"Johnston","email":"ajohnston2g@gov.uk","fecha_inicio":"01/10/2016","total":"$2756.19"},
            {"first_name":"Amy","last_name":"Nichols","email":"anichols2h@unicef.org","fecha_inicio":"22/07/2016","total":"$5392.73"},
            {"first_name":"Albert","last_name":"Perkins","email":"aperkins2i@ucoz.ru","fecha_inicio":"05/10/2016","total":"$7385.89"},
            {"first_name":"Christopher","last_name":"Lawrence","email":"clawrence2j@zdnet.com","fecha_inicio":"29/05/2016","total":"$2905.47"},
            {"first_name":"Ruby","last_name":"Carpenter","email":"rcarpenter2k@pbs.org","fecha_inicio":"31/07/2016","total":"$4287.60"},
            {"first_name":"Eugene","last_name":"Thomas","email":"ethomas2l@baidu.com","fecha_inicio":"06/09/2016","total":"$345.37"},
            {"first_name":"Heather","last_name":"Carroll","email":"hcarroll2m@cbsnews.com","fecha_inicio":"08/11/2016","total":"$1482.72"},
            {"first_name":"Harold","last_name":"Richardson","email":"hrichardson2n@moonfruit.com","fecha_inicio":"23/10/2016","total":"$8727.37"},
            {"first_name":"Ryan","last_name":"Harris","email":"rharris2o@noaa.gov","fecha_inicio":"13/03/2016","total":"$7918.74"},
            {"first_name":"Helen","last_name":"Hawkins","email":"hhawkins2p@arizona.edu","fecha_inicio":"06/06/2016","total":"$5035.12"}
          ];
      
          $scope.currentPage = 0;
          $scope.pageSize = 10;	
      	  $scope.pagination = 0;
          $scope.currentPageBack=0;
      
          $scope.myFunction = function(num) {
              $scope.currentPage=num;
              var myEl = angular.element( document.querySelector( '.btn-' + num ) );
               myEl.parent().children().removeClass('activo');
      		     myEl.addClass('activo');
          }

          $scope.buscar= function (){
            $scope.currentPage = 0;
          }
      
          $scope.getData = function () {
            return $filter('filter')($scope.names, $scope.filterSearch);
          }
      	  $scope.getNumber = function(pagination) {
      	    return new Array(Math.ceil($scope.getData().length/$scope.pageSize)); 
      	  }
      
      	$scope.cambiatexto=function(event){
      		if (event.target.innerHTML == "Abrir") {
      			event.target.innerHTML="Cerrar";
      		}else{
      			event.target.innerHTML="Abrir";
      		};
      	}
      
          $scope.resetStart = function(){
              $scope.currentPage = 0;
              var myEl = angular.element( document.querySelector( '.btn-0' ) );
               myEl.parent().children().removeClass('activo');
      	       myEl.addClass('activo');
          }
      
      }]);
      
      app.filter('startFrom', function() {
          return function(input, start) {
              start = +start; 
              return input.slice(start);
          }
      })
      
