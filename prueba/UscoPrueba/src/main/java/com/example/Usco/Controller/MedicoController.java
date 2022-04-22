/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.Usco.Controller;

import com.example.Usco.Model.Medico;
import com.example.Usco.Service.MedicoService;
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
public class MedicoController {
    @Autowired
    private MedicoService medicoService;
    
    //Listar
    @GetMapping("/medico")
    public List<Medico> listar(){
        return medicoService.findAll();
    } 
    
    //Guardar
    @PostMapping("/medico")
    public Medico guardar(@RequestBody Medico medico){
        return medicoService.save(medico);
    }
    
    //get un  medico
    @GetMapping("/medico/{id}")
    public Medico unMedico(@PathVariable Integer id){
        return medicoService.findById(id);
    }
     
    //Modificar 
    
    @PutMapping("/medico/{id}")
    public Medico modificar(@RequestBody Medico medico, @PathVariable Integer id){
        Medico medicoActual= medicoService.findById(id);
        medicoActual.setDireccion(medico.getDireccion());
        medicoActual.setTelefono(medico.getTelefono());
        
        return medicoService.save(medicoActual);
        
    }
}
