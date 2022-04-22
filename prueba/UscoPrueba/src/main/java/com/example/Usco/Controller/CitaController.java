/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.Usco.Controller;



import com.example.Usco.Model.Cita;
import com.example.Usco.Service.CitaService;
import com.example.Usco.Service.ConsultorioService;
import com.example.Usco.Service.MedicoService;
import com.example.Usco.Service.PacienteService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
public class CitaController {
    
@Autowired
    private CitaService citaService;
    private MedicoService medicoService;
    private ConsultorioService consultorioService;
    private PacienteService pacienteService;
    
    //Listar
    @GetMapping("/cita")
    public List<Cita> listar(){
        return citaService.findAll();
    } 
    
    //Guardar
    @PostMapping("/cita")
    public Cita guardar(@RequestBody Cita cita){
        
        return citaService.save(cita);
    }
    
    //get un  consultorio
    @GetMapping("/cita/{id}")
    public Cita unaCita(@PathVariable Integer id){
        return citaService.findById(id);
    }
     
    //Modificar 
    
    @PutMapping("/cita/{id}")
    public Cita modificar(@RequestBody Cita cita, @PathVariable Integer id){
        Cita citaActual= citaService.findById(id);
        citaActual.setId_medico(cita.getId_medico());
        citaActual.setId_consultorio(cita.getId_consultorio());
        citaActual.setObservacion(cita.getObservacion());
        citaActual.setEstado(cita.getEstado());
        return citaService.save(citaActual);
        
    }
}
