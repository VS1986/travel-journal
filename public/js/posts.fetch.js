const { newPost } = document.forms;

if (newPost) {
  newPost.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(newPost);
    const data = Object.fromEntries(formData);
    const response = await fetch('/posts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
    if (result.msg) {
      window.location.href = `/posts/${result.id}`;
    } else if (result.err) {
      res.json(`Error ======> ${error}`);
    } else {
      res.json('server died unexpectedly');
    }
  });
}
