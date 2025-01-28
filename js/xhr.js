// const requesturl="https://api.github.com/users/sikandarsubhani"
// const xhr= new XMLHttpRequest()
// xhr.open('GET',requesturl,true)
// xhr.onreadystatechange=function(){
//   console.log(xhr.readyState)
//   if(xhr.readyState==4){
//     if(xhr.status==200){
//       const data=JSON.parse(xhr.responseText)
//       document.querySelector('body').innerHTML+=data
//     }else{
//       console.log(xhr.statusText);
      
//     }
//   } 
// }
// xhr.send()


// Create a reusable XHR function that returns a Promise
function makeRequest(url) {
  return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      
      xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
              resolve(JSON.parse(xhr.responseText));
          } else {
              reject({
                  status: xhr.status,
                  statusText: xhr.statusText
              });
          }
      };
      
      xhr.onerror = () => {
          reject({
              status: xhr.status,
              statusText: 'Request failed'
          });
      };
      
      xhr.send();
  });
}


// Chain requests using async/await
async function fetchUserAndPosts() {
  try {
      const users = await makeRequest('https://jsonplaceholder.typicode.com/users');
      const firstUser = users[0];
      const posts = await makeRequest(`https://jsonplaceholder.typicode.com/posts?userId=${firstUser.id}`);
      console.log(posts);
      return posts;
  } catch (error) {
      console.error('Error:', error.statusText);
      throw error;
  }
}

// Usage
fetchUserAndPosts();
