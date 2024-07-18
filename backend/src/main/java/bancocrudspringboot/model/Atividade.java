package bancocrudspringboot.model;

import javax.persistence.*;

@Entity
@Table(name = "Atividade")
public class Atividade {
    
    private long id;
    private long usuario;

    private String tipo; // CARTAO - ESTACIONAMENTO - CREDITO - VEICULO
    // Cartao:
    //      Adicionado - Ocorre ao inserir novo cartao
    //      Excluido - Ocorre ao excluir um cartao

    // Estacionamento:
    //      Iniciado - Ocorre quando é estacionado um veiculo

    // Credito:
    //      Adicionado - Ocorre quando é adicionado um credito
    //      Atualizado - Ocorre quando é utilizado um credito

    // Veiculo:
    //      Adicionado - Ocorre ao inserir novo veiculo
    //      Excluido - Ocorre ao excluir um veiculo

    private long cartao_id;
    private long credito_id;
    private long estacionamento_id;
    private long veiculo_id;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getVeiculo_id() {
        return veiculo_id;
    }

    public void setVeiculo_id(long veiculo_id) {
        this.veiculo_id = veiculo_id;
    }

    public long getEstacionamento_id() {
        return estacionamento_id;
    }

    public void setEstacionamento_id(long estacionamento_id) {
        this.estacionamento_id = estacionamento_id;
    }

    public long getCredito_id() {
        return credito_id;
    }

    public void setCredito_id(long credito_id) {
        this.credito_id = credito_id;
    }

    public long getCartao_id() {
        return cartao_id;
    }

    public void setCartao_id(long cartao_id) {
        this.cartao_id = cartao_id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public long getUsuario() {
        return usuario;
    }

    public void setUsuario(long usuario) {
        this.usuario = usuario;
    }
}
