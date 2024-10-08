
var checkBox = document.getElementById('switch-checkbox');
function themeSwitcher(){
    if(checkBox.checked == true){
        
        return  document.getElementById('body').className = 'dark';
    }
    else{
        return  document.getElementById('body').className = 'light';
    
    }
    
};


