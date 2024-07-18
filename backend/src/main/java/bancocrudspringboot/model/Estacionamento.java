package bancocrudspringboot.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Estacionamento")
public class Estacionamento {

    private long id;

    private long veiculo;
    private String endereco;
    private String regra;
    private long tempo; // Tempo em minutos
    private String valorporhora; // Valor por Hora
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

    public long getTempo() {
        return tempo;
    }

    public void setTempo(long tempo) {
        this.tempo = tempo;
    }

    public String getValorporhora() {
        return valorporhora;
    }

    public void setValorporhora(String valorporhora) {
        this.valorporhora = valorporhora;
    }

    public String getRegra() {
        return regra;
    }

    public void setRegra(String regra) {
        this.regra = regra;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public long getVeiculo() {
        return veiculo;
    }

    public void setVeiculo(long veiculo) {
        this.veiculo = veiculo;
    }
}