function startExam()
{
if(document.getElementById('fepassword').value == 'fe@ict')
       {
         window.location.href = 'fe.html';
       }
else
       {
          alert('Enter correct password and try again!');}
}

function startDemo()
{
if(document.getElementById('demopassword').value == 'demoit')
       {
         window.location.href = 'demo.html';
       }
else
       {
          alert('Enter correct password and try again!');}
}