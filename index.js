const loadData = async(searchText)=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data= await res.json();
    displayData(data.data);
}

const displayData = (datas)=>{
    const dataContainer=document.getElementById('dataContainer')
        dataContainer.textContent='';
    datas.forEach(data => {
        
        const div = document.createElement('div');
        div.classList = 'card w-96 bg-base-100 shadow-xl';
        div.innerHTML = ` <figure><img src="${data.image}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${data.phone_name}</h2>
          <p>'${data.slug}'</p>
          <div class="card-actions justify-end">
            <button onclick='showDetail("${data.slug}"); my_modal_3.showModal()' class="btn btn-primary">Buy Now</button>
          </div>
        </div> `;

        dataContainer.appendChild(div)
    });
    let dataLength=datas.length;
    if (dataLength>10) {
        const showAll=document.getElementById('showAll');
        showAll.classList.remove('hidden')
    }

}

const searchData=()=>{
    const input= document.getElementById('input');
    loadData(`${input.value}`);
    loadSpinner(true)
}



const loadSpinner=(isLodding)=>{
    if (isLodding) {
        const isHidden= document.getElementById('isHidden');
        isHidden.classList.remove('hidden') 
    }
    

}


 const showAll=(dataLength)=>{
        
       
 }






console.log('connected')
