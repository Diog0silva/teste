function abrirWpp(servico) {
    const numero = "5521979839083"; 
    const mensagem = `Olá! Gostaria de agendar o serviço: *${servico}*`;
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
