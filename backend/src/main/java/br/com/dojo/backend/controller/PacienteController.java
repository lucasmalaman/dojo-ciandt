package br.com.dojo.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.base.Preconditions;

import br.com.dojo.backend.model.Paciente;
import br.com.dojo.backend.services.PacienteService;

@RestController()
@RequestMapping("/pacientes")
public class PacienteController {
	
	@Autowired
	private PacienteService service;

	@RequestMapping(value="/", method=RequestMethod.GET)
	@ResponseBody
	public List<Paciente> getPacientes() {
		return service.list();
	}
	
	@RequestMapping(value="/salvar", method=RequestMethod.POST)
	public Paciente cadastrar(@RequestBody Paciente paciente) {
		Preconditions.checkArgument(paciente.getCodigo() == null, "Código deve ser nulo");
		return service.salvar(paciente);
	}
	
	@RequestMapping(value="/atualizar", method=RequestMethod.PUT)
	public Paciente atualizar(@RequestBody Paciente paciente) {
		Preconditions.checkNotNull(paciente.getCodigo());
		return service.atualizar(paciente);
	}
	
	
	
}
