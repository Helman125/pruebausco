/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.Usco.Controller;

import com.example.Usco.Model.Paciente;
import com.example.Usco.Service.PacienteService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Helman
 */
@RestController
@CrossOrigin(origins={"*"})
@RequestMapping("/api")
public class PacienteController {
    
@Autowired
    private PacienteService pacienteService;
    
    //Listar
    @GetMapping("/paciente")
    public List<Paciente> listar(){
        return pacienteService.findAll();
    } 
    
    //Guardar
    @PostMapping("/paciente")
    public Paciente guardar(@RequestBody Paciente paciente){
        return pacienteService.save(paciente);
    }
    
    //get un  paciente
    @GetMapping("/paciente/{id}")
    public Paciente unPaciente(@PathVariable Integer id){
        return pacienteService.findById(id);
    }
     
    //Modificar 
    
    @PutMapping("/paciente/{id}")
    public Paciente modificar(@RequestBody Paciente paciente, @PathVariable Integer id){
        Paciente pacienteActual= pacienteService.findById(id);
        pacienteActual.setDireccion(paciente.getDireccion());
        pacienteActual.setTelefono(paciente.getTelefono());
        
        return pacienteService.save(pacienteActual);
        
    }
}
