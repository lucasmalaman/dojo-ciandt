package br.com.dojo.backend.services;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;

import br.com.dojo.backend.model.Paciente;

@Service
public class PacienteService {
	
	public static Map<Integer, Paciente> hash;
	
	public static Integer sequence = 1;
	
	static {
		hash = Maps.newHashMap();
		Paciente value = Paciente.builder()
							.codigo(sequence)
							.dataNascimento(new Date())
							.idade(15)
							.nome("Lucas")
							.sobrenome("Malaman de Oliveira")
							.build();
		hash.put(value.getCodigo(), value);
	}
	
	public List<Paciente> list() {
		return Lists.newArrayList( hash.values() );
	}

	public Paciente salvar(Paciente paciente) {
		hash.put(++sequence, paciente);
		paciente.setCodigo(sequence);
		return paciente;
	}

	public Paciente atualizar(Paciente paciente) {
		hash.put(paciente.getCodigo(), paciente);
		return paciente;
	}
	
	
}
