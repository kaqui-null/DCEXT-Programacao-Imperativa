import './informacoes.css'

export default function InformacoesResExame(){
    return(
        <div className="informacoes">
      
        <p><strong>HOSPITAL: </strong><span className="hospital_exame"></span></p>
        <p><strong>DATA DE REALIZAÇÃO: </strong><span className="data_real_exame"></span></p>
        <p><strong>DATA LIBERAÇÃO: </strong><span className="data_lib_exame"></span></p>
        <p><strong>STATUS: </strong><span className="status_exame"></span></p>
        <p><strong>ARQUIVOS: </strong><span className="arquivos_exames"></span></p>
      </div>        
    );
}