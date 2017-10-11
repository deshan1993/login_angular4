import { Component } from "@angular/core";

declare var $: any;
declare var jQuery: any;

@Component({
    selector: 'form1',
    styleUrls: ['./content_provider.component.css'],
    templateUrl: './content_provider.component.html'
})

export class Content_providerComponent{
 

    tabChangeToCompany(){
        $("#radio-btn2").click(function(){
            $("#professional-category").slideDown(1000);
        });
        $("#radio-btn2").click(function(){
            $("#individual-category").slideUp(1000);
        });
        $("#radio-btn2").click(function(){
            $("#radioB1").css("background-color","white");
        });
        $("#radio-btn2").click(function(){
            $("#radioB2").css("background-color","#D0F5A9");
        });        
    }

    tabChangeToIndividual(){
        $("#radio-btn1").click(function(){
            $("#professional-category").slideUp(1000);
        });
        $("#radio-btn1").click(function(){
            $("#individual-category").slideDown(1000);
        });
        $("#radio-btn1").click(function(){
            $("#radioB1").css("background-color","#F2F5A9");
        });
        $("#radio-btn1").click(function(){
            $("#radioB2").css("background-color","white");
        });        
    }

}