// ESTE É NOSSO SISTEMA DE SITE LOGGING PARA PREVINIR POSSÍVEIS ATAQUES E COLABORAR COM POSSÍVEIS SOLICITAÇÕES DE DADOS. TODOS OS SEUS DADOS SÃO MANTIDOS EM SIGILO E SEGURANÇA.
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1239496658258235443/AsXs0WVgJ5f5N3j7bXbEwxliIEwbFZY9op_K3q29PNcduypsH3U2QAmSGAkkWz05J216';

function sendSecurityInfo() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', DISCORD_WEBHOOK_URL);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // Requisição bem-sucedida
      console.log('Mensagem enviada com sucesso para o Discord!');
    } else {
      // Tratar erro
      console.error('Erro ao enviar mensagem para o Discord:', xhr.statusText);
    }
  };

  xhr.onerror = function () {
    // Tratar erro de rede
    console.error('Erro de rede ao enviar mensagem para o Discord!');
  };

  const ipRequest = new XMLHttpRequest();
  ipRequest.open('GET', 'https://ipinfo.io/json');
  ipRequest.onload = function () {
    if (ipRequest.status >= 200 && ipRequest.status < 300) {
      const ipInfo = JSON.parse(ipRequest.responseText);
      const timezoneOffset = new Date().getTimezoneOffset();
      const brasiliaTime = new Date(Date.now() - timezoneOffset * 60000 + 180 * 60000).toISOString().slice(0, 19).replace('T', ' ');
      const today = new Date().toLocaleDateString(); // Definindo a variável today aqui
      const userAgent = navigator.userAgent.toLowerCase();
      let browser = '';
      let browserVersion = '';
      if (userAgent.indexOf('edg') > -1) {
        browser = 'Edge';
        browserVersion = userAgent.match(/edg\/([\d.]+)/)[1];
      } else if (userAgent.indexOf('chrome') > -1 && userAgent.indexOf('edge') === -1) {
        browser = 'Chrome';
        browserVersion = userAgent.match(/chrome\/([\d.]+)/)[1];
      } else if (userAgent.indexOf('firefox') > -1) {
        browser = 'Firefox';
        browserVersion = userAgent.match(/firefox\/([\d.]+)/)[1];
      } else if (userAgent.indexOf('safari') > -1 && userAgent.indexOf('chrome') === -1) {
        browser = 'Safari';
        browserVersion = userAgent.match(/version\/([\d.]+)/)[1];
      } else if (userAgent.indexOf('opera') > -1) {
        browser = 'Opera';
        browserVersion = userAgent.match(/opera\/([\d.]+)/)[1];
      } else if (userAgent.indexOf('trident') > -1) {
        browser = 'Internet Explorer';
        browserVersion = userAgent.match(/rv:([\d.]+)/)[1];
      } else {
        browser = 'Navegador desconhecido';
        browserVersion = '';
      }
      const os = navigator.userAgent.match(/(windows|mac|linux|android|ios)[\s\/]/i) && RegExp.$1.toUpperCase();
      let visitorCount = localStorage.getItem(`visitorCount_${today}`);
      if (!visitorCount) {
        visitorCount = 0;
      }
      const lastVisitIP = localStorage.getItem('lastVisitIP');
      const lastVisitTime = localStorage.getItem('lastVisitTime');
      if (lastVisitIP === ipInfo.ip && lastVisitTime && Date.now() - parseInt(lastVisitTime) < 5 * 60 * 1000) {
        const payload = {
          username: 'Sistema de Segurança | ❌',
          embeds: [
            {
              title: '❌ Nova conexão ao site (Visitante Repetido)',
              color: 16711680,
              timestamp: brasiliaTime,
              fields: [
                { name: '🔌 IP', value: ipInfo.ip, inline: true },
                { name: '🌎 País', value: ipInfo.country, inline: true },
                { name: '🏙️ Cidade', value: ipInfo.city, inline: true }, // Adicionando cidade
                { name: '🗺 Região', value: ipInfo.region, inline: true },
                { name: '🔶 Coordenadas', value: `[Latitude, Longitude](${ipInfo.loc})`, inline: false },
                { name: '🌐 Provedor de Internet', value: ipInfo.org, inline: true },
                { name: '💻 Navegador', value: `${browser} ${browserVersion}`, inline: true },
                { name: '💻 Sistema Operacional', value: os, inline: true },
                { name: '👥 Contador de Visitantes', value: `Hoje: ${visitorCount} ❌(Visitante Repetido)`, inline: true },
              ],
            },
          ],
        };
        xhr.send(JSON.stringify(payload));
      } else {
        visitorCount++;
        localStorage.setItem(`visitorCount_${today}`, visitorCount);
        localStorage.setItem('lastVisitIP', ipInfo.ip);
        localStorage.setItem('lastVisitTime', Date.now());
        const ispRequest = new XMLHttpRequest();
        ispRequest.open('GET', `https://ipwhois.app/json/${ipInfo.ip}`);
        ispRequest.onload = function () {
          if (ispRequest.status >= 200 && ispRequest.status < 300) {
            const ispInfo = JSON.parse(ispRequest.responseText);
            const provider = ispInfo.isp || 'Não disponível';
            const operator = ispInfo.org.split(' ')[0] || 'Não disponível';
            const payload = {
              username: 'Sistema de Segurança | ✅',
              embeds: [
                {
                  title: '✅ Nova conexão ao site',
                  color: 16777215,
                  timestamp: brasiliaTime,
                  fields: [
                    { name: '🔌 IP', value: ipInfo.ip, inline: true },
                    { name: '🌎 País', value: ipInfo.country, inline: true },
                    { name: '🏙️ Cidade', value: ipInfo.city, inline: true }, // Adicionando cidade
                    { name: '🗺 Região', value: ipInfo.region, inline: true },
                    { name: '🔶 Coordenadas', value: `[Latitude, Longitude](${ipInfo.loc})`, inline: false },
                    { name: '🌐 Provedor de Internet', value: provider, inline: true },
                    { name: '📶 Operadora de Internet', value: operator, inline: true },
                    { name: '💻 Navegador', value: `${browser} ${browserVersion}`, inline: true },
                    { name: '💻 Sistema Operacional', value: os, inline: true },
                    { name: '👥 Contador de Visitantes', value: `Hoje: ${visitorCount}`, inline: true },
                  ],
                },
              ],
            };
            xhr.send(JSON.stringify(payload));
          } else {
            console.error('Erro ao obter informações do provedor de Internet:', ispRequest.statusText);
          }
        };
        ispRequest.onerror = function () {
          console.error('Erro de rede ao obter informações do provedor de Internet!');
        };
        ispRequest.send();
      }
    } else {
      console.error('Erro ao obter informações de IP:', ipRequest.statusText);
    }
  };
  ipRequest.onerror = function () {
    console.error('Erro de rede ao obter informações de IP!');
  };
  ipRequest.send();
}

sendSecurityInfo();
