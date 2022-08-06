 
        function validate() {    
            var FirstName = document.reg_form.FirstName;    
            var LastName = document.reg_form.LastName;    
              
            var Email = document.reg_form.Email;    
            
            if (FirstName.value.length <= 0) {    
                alert("Name is required");    
                FirstName.focus();    
                return false;    
            }    
            if (LastName.value.length <= 0) {    
                alert("Last Name is required");    
                LastName.focus();    
                return false;    
            }    
            
                
            if (Email.value.length <= 0) {    
                alert("Email Id is required");    
                Email.focus();    
                return false;    
            }    
            
            return false;    
        }    