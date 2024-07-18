package bancocrudspringboot.model;

import javax.persistence.*;

@Entity
@Table(name = "Cartao", uniqueConstraints={@UniqueConstraint(columnNames={"numero"})})
public class Cartao {
    
    private long id;

    private String numero;
    private String nome;
    private String dataexpiracao;
    private int cvv;
    private long usuario;
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getUsuario() {
        return usuario;
    }

    public void setUsuario(long usuario) {
        this.usuario = usuario;
    }

    public int getCvv() {
        return cvv;
    }

    public void setCvv(int cvv) {
        this.cvv = cvv;
    }

    public String getDataexpiracao() {
        return dataexpiracao;
    }

    public void setDataexpiracao(String dataexpiracao) {
        this.dataexpiracao = dataexpiracao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }
}
