function abrirWpp(servico) {
    const numero = "5511999999999"; // Altere para seu número com DDD e país
    const mensagem = `Olá! Gostaria de agendar o serviço: *${servico}*`;
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }