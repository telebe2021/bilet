function submitForm() {
    const fileInput = document.getElementById('fileInput');
    const nameInput = document.getElementById('nameInput');
    const categoryInput = document.getElementById('categoryInput');

    const file = fileInput.files[0];
    const name = nameInput.value;
    const category = categoryInput.value;


    console.log('File:', file);
    console.log('Name:', name);
    console.log('Category:', category);
}