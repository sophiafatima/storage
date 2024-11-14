// carlão passou aqui 

function mascara_telefone ()
        {
           //limitador
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14)
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
        }



function mascara_cep()
        { var cep_formatado = document.getElementById("cep").value
            if (cep_formatado[2]!=".")
            {
                if (cep_formatado[2]!=undefined)
                {
                    document.getElementById("cep").value=cep_formatado.slice(0,2)+"."+cep_formatado[2];
                }
            }
        
            if (cep_formatado[6]!="-")
            {
                if(cep_formatado[6]!=undefined)
                {
                    document.getElementById("cep").value=cep_formatado.slice(0,6)+"-"+cep_formatado[6]
                }
            }

        }       
        function mascara_cpf()
        { var cpf_formatado = document.getElementById("cpf").value
            if (cpf_formatado[3]!=".")
            {
                if (cpf_formatado[3]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3];
                }
            }
        
            if (cpf_formatado[7]!=".")
            {
                if(cpf_formatado[7]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7]
                }
            }
            if (cpf_formatado[11]!="-")
            {
                if(cpf_formatado[11]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11]
                }
            }

        }       



        function mascara_codigo()
        { var codigo_formatado = document.getElementById("codigo").value
            if (codigo_formatado[2]!="-")
            {
                if (codigo_formatado[2]!=undefined)
                {
                    document.getElementById("codigo").value=codigo_formatado.slice(0,2)+"-"+codigo_formatado[2];
                }
            }
            if (codigo_formatado[5]!="/")
            {
                if (codigo_formatado[5]!=undefined)
                {
                    document.getElementById("codigo").value=codigo_formatado.slice(0,5)+"/"+codigo_formatado[5];
                }
            }
            if (codigo_formatado[6]!="/")
            {
                if (codigo_formatado[6]!=undefined)
                {
                    document.getElementById("codigo").value=codigo_formatado.slice(0,6)+"/"+codigo_formatado[6];
                }
            }
            if (codigo_formatado[10]!="-")
            {
                if(codigo_formatado[10]!=undefined)
                {
                    document.getElementById("codigo").value=codigo_formatado.slice(0,10)+"-"+codigo_formatado[10]
                }
            }
            if (codigo_formatado[14]!=".")
            {
                if(codigo_formatado[14]!=undefined)
                {
                    document.getElementById("codigo").value=codigo_formatado.slice(0,14)+"."+codigo_formatado[14]
                }
            }
            if (codigo_formatado[15]!="9")
            {
                if(codigo_formatado[15]!=undefined)
                {
                    document.getElementById("codigo").value=codigo_formatado.slice(0,15)+"9"+codigo_formatado[15]
                }
            }
            if (codigo_formatado[16]!=".")
            {
                if(codigo_formatado[16]!=undefined)
                {
                    document.getElementById("codigo").value=codigo_formatado.slice(0,16)+"."+codigo_formatado[16]
                }
            }

        }       

             

        function mascara_cnpj()
        { var cnpj_formatado = document.getElementById("cnpj").value
            if (cnpj_formatado[2]!=".")
            {
                if (cnpj_formatado[2]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,2)+"."+cnpj_formatado[2];
                }
            }
            if (cnpj_formatado[6]!=".")
            {
                if (cnpj_formatado[6]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,6)+"."+cnpj_formatado[6];
                }
            }
            if (cnpj_formatado[10]!="/")
            {
                if (cnpj_formatado[10]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,10)+"/"+cnpj_formatado[10];
                }
            }
            if (cnpj_formatado[11]!="0")
            {
                if (cnpj_formatado[11]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,11)+"0"+cnpj_formatado[11];
                }
            }
            if (cnpj_formatado[12]!="0")
            {
                if (cnpj_formatado[12]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,12)+"0"+cnpj_formatado[12];
                }
            }
            if (cnpj_formatado[13]!="0")
            {
                if (cnpj_formatado[13]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,13)+"0"+cnpj_formatado[13];
                }
            }
            if (cnpj_formatado[14]!="1")
            {
                if (cnpj_formatado[14]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,14)+"1"+cnpj_formatado[14];
                }
            }
            
            
            if (cnpj_formatado[15]!="-")
            {
                if (cnpj_formatado[15]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,15)+"-"+cnpj_formatado[15];
                }
            }
        

        }      









        function salvarCpf()
        {
            var cpf = document.querySelector(cpf).value 
            localStorage.setItem("cpf", cpf)

            addEventListener("DOMContentLoaded", () =>{
                var recebecpf= localStorage.getItem("cpf")
                document.querySelector("#reccpf").innerHTML=recebecpf})

        }function salvarCep()
        {
            var cep = document.querySelector(cep).value 
            localStorage.setItem("cep", cep)

            addEventListener("DOMContentLoaded", () =>{
                var recebecep= localStorage.getItem("cep")
                document.querySelector("#reccep").innerHTML=recebecep})

        }function salvarTelefone()
        {
            var telefone = document.querySelector(telefone).value 
            localStorage.setItem("telefone", telefone)

            addEventListener("DOMContentLoaded", () =>{
                var recebetelefone= localStorage.getItem("telefone")
                document.querySelector("#rectelefone").innerHTML=recebetelefone})

        }