package br.com.dojo.backend.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @Builder 
@NoArgsConstructor @AllArgsConstructor
public class Paciente {
	
	private Integer codigo;
	private String nome;
	private String sobrenome;
	private Integer idade;
	
	@JsonFormat(pattern="dd/MM/yyyy")
	private Date dataNascimento;
	
}
