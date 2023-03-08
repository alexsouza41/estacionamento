const btnCadastrar = document.querySelector('#teste');


function cadastrar(event){

    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();

    event.preventDefault(); 
    const modelo = document.querySelector('#modelo');
    const placa = document.querySelector('#placa'); 
    if(modelo.value == ''){
        alert('digite o modelo do veículo');
        return false;
    }
    
    if(placa.value == ''){
        alert('digite a placa do veículo');
        return false;
    }
    
    let linha = `
    <tr>
        <td>${modelo.value}</th>
        <td>${placa.value}</td>
        <td>${horas}:${minutos}</td>
        <td><button onclick="deletar(this.parentNode.parentNode)" class="btn btn-danger"><i class="fa fa-close"></i></button></td>
    </tr>`;

    const lista = document.querySelector('#lista');
    lista.innerHTML = lista.innerHTML + linha;
    modelo.value = '';
    placa.value = '';
}

btnCadastrar.addEventListener('click', cadastrar);

function deletar(registro){

    Swal.fire({
        title: 'voce tem certeza?',
        text: "voce nao podera reveter isto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'sim,quero apag!'
      }).then((result) => {
        if (result.isConfirmed) {
            registro.remove();
          Swal.fire(
            'deletado!',
            'veiculo removido do patio.',
            'success'
          )
        }
      })
}



