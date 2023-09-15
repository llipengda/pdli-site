import frps from '../../../assets/images/services/frps.png'
import onedrive from '../../../assets/images/services/onedrive.png'
import minecraft from '../../../assets/images/services/minecraft.jpg'
import codeServer from '../../../assets/images/services/code-server.png'

export default {
  frps: {
    name: 'frps',
    imageUrl: frps,
    visitBtn: true,
    visitUrl: 'https://pdli.site:7501',
    visitBtnName: 'DASHBOARD'
  },
  onedrive: {
    name: 'onedrive',
    imageUrl: onedrive,
    visitBtn: true,
    visitUrl: 'https://files.pdli.site'
  },
  minecraft: {
    name: 'minecraft',
    imageUrl: minecraft,
    detailBtn: true,
    detailUrl: '/services/minecraft'
  },
  codeServer: {
    name: 'code-server',
    imageUrl: codeServer,
    visitBtn: true,
    visitUrl: 'https://pdli.site:8081',
    detailBtn: true,
    detailUrl: '/services/code-server'
  }
}
