
/*
Summary:

1. This is just a SAMPLE logic for patient trigger
2. Using only ONE patient (like a returning user)
3. The PURPOSE is to SHOW THE UI after clicking onto the pain levels
4. TWO focus pain levels: MILD (painlevel = 2) & SEVERE (painlevel = 4)

*/


// STEP 5: ADD THE FOLLOWING JS FILE TO YOUR R STUIDO PAGE 

// STEP 6: BE AWARE AT LINE 193. ABOUT THE THERAPY BUTTON WHICH WILL LEAD THE USER
            //TO THE BEHAVIOR THERAPY PAGE (BREATHE)
            //COULD YOU LINK THAT TO THE THERAPY PAGE??



$(document).ready(function() {
    //  Assumming we have a patient constructor 
    function Patient(
      id,
      first,
      last,
      age,
      email,
      phone,
      painThreshold,
      dosesAmount
    ) {
      this.id = id;
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.email = email;
      this.phone = phone;
      this.painThreshold = painThreshold;
      this.dosesAmount = dosesAmount;
    }

    // Here is the patient data with painthreshold and dosesAmount 

        //The logic behind pain threshold and dosesAmount are complicated
        //so decided to use a sample value 


    var sarah = new Patient(
      "234",
      "Sarah",
      "Lee",
      "23",
      "sarahlee@gmail.com",
      "345-234-5647",
      "6",
      "1500"
    );



    //Remember the button-painlevel class created for two buttons in the HTML
    //here is what happens after clicking them 

    $(document).on("click", ".button-painlevel", function() {
    
    
     //Getting the data-painlevel attribute 
      var painLevel = $(this).attr("data-painlevel");

      

      //when the patient pain condition is severe (6 & 8 & 10)
      if (painLevel >= sarah.painThreshold) {
        //trigger medication

        //if the patient is under the limit of 2400mg of medicine,
        //then a modal pop up saying that they can take another
        //pain medication

        if (sarah.dosesAmount >= 2400) {
          var modal_Div = $("<div>");
          modal_Div.addClass("modal modal-fixed-footer");
          modal_Div.attr("id", "modal");
          var modal_content = $("<div>");
          modal_content.addClass("modal-content");
          var modal_title = $("<h4>");
          modal_title.text("Suggested Medications");
          var modal_subtext = $("<p class='text-danger'>");
          modal_subtext.text("MEDICATIONS OVER LIMIT!");
          var modal_additionalText = $("<p>");
          modal_additionalText.text("Attend Self-Care Therapy Now: ");
          var therapyButton = $("<button>")
            .attr("class", "btn btn-warning therapyButton")
            .text("Therapy Session");

          modal_content.append(modal_title);
          modal_content.append(modal_subtext);
          modal_content.append(modal_additionalText);
          modal_content.append(therapyButton);
          modal_Div.append(modal_content);

          var modal_footer = $("<div>");
          modal_footer.addClass("modal-footer");
          var modal_close = $("<button>")
            .attr("class", "btn btn-secondary btn-close-modal")
            .attr("data-dismiss", "modal")
            .text("Close");

          modal_footer.append(modal_close);
          modal_Div.append(modal_footer);
          $("#modal").append(modal_Div);
          $(".modal").modal();

        }
        else {
        //if patient has taken over 2400mg of medicine,
        //then a modal, showing the user is over the limit
        //Direct the user to Behavior Therapy
        var modal_Div = $("<div>");
          modal_Div.addClass("modal modal-fixed-footer");
          modal_Div.attr("id", "modal");
          var modal_content = $("<div>");
          modal_content.addClass("modal-content");
          var modal_title = $("<h4>");
          modal_title.text("Suggested Medications");
          var modal_subtext = $("<p class='text-danger'>");
          modal_subtext.text("Oxycodone: 1 pill");
          var modal_additionalText = $("<p>");
          modal_additionalText.text("Attend Self-Care Therapy Now: ");
          var therapyButton = $("<button>")
            .attr("class", "btn btn-warning therapyButton")
            .text("Therapy Session");

          modal_content.append(modal_title);
          modal_content.append(modal_subtext);
          modal_content.append(modal_additionalText);
          modal_content.append(therapyButton);
          modal_Div.append(modal_content);

          var modal_footer = $("<div>");
          modal_footer.addClass("modal-footer");
          var modal_close = $("<button>")
            .attr("class", "btn btn-secondary btn-close-modal")
            .attr("data-dismiss", "modal")
            .text("Close");

          modal_footer.append(modal_close);
          modal_Div.append(modal_footer);
          $("#modal").append(modal_Div);
          $(".modal").modal();

        }
      } else {
        //option for meditation theraphy
        var modal_Div = $("<div>");
          modal_Div.addClass("modal modal-fixed-footer");
          modal_Div.attr("id", "modal");
          var modal_content = $("<div>");
          modal_content.addClass("modal-content");
          var modal_title = $("<h4>");
          modal_title.text("Suggested Pain Relief Methods");
          var modal_additionalText = $("<p>");
          modal_additionalText.text("Attend Self-Care Therapy Now:");
          var therapyButton = $("<button>")
            .attr("class", "btn btn-warning therapyButton")
            .text("Therapy Session");
            var modal_journalText = $("<p class='journal-text'>");
          modal_journalText.text("Check your pain journal:");
          var journalButton = $("<button>")
            .attr("class", "btn btn-primary journalButton")
            .text("Pain Journal");

          modal_content.append(modal_title);
          modal_content.append(modal_additionalText);
          modal_content.append(therapyButton);
          modal_content.append(modal_journalText);
          modal_content.append(journalButton);
          modal_Div.append(modal_content);

          var modal_footer = $("<div>");
          modal_footer.addClass("modal-footer");
          var modal_close = $("<button>")
            .attr("class", "btn btn-secondary btn-close-modal")
            .attr("data-dismiss", "modal")
            .text("Close");

          modal_footer.append(modal_close);
          modal_Div.append(modal_footer);
          $("#modal").append(modal_Div);
          $(".modal").modal();
      }
    });

    $(document).on("click", ".therapyButton", function() {
//****** TODO: once this button is clicked, go to the therapy session page!!!

    });

    $(document).on("click",".btn-close-modal", function(){
        $("#modal .modal").remove();
    })
  });