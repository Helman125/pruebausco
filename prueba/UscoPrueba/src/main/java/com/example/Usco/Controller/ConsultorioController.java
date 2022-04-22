/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.Usco.Controller;


import com.example.Usco.Model.Consultorio;
import com.example.Usco.Service.ConsultorioService;
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
public class ConsultorioController {
    
@Autowired
    private ConsultorioService consultorioService;
    
    //Listar
    @GetMapping("/consultorio")
    public List<Consultorio> listar(){
        return consultorioService.findAll();
    } 
    
    //Guardar
    @PostMapping("/consultorio")
    public Consultorio guardar(@RequestBody Consultorio consultorio){
        return consultorioService.save(consultorio);
    }
    
    //get un  consultorio
    @GetMapping("/consultorio/{id}")
    public Consultorio unConsultorio(@PathVariable Integer id){
        return consultorioService.findById(id);
    }
     
    //Modificar 
    
    @PutMapping("/consultorio/{id}")
    public Consultorio modificar(@RequestBody Consultorio consultorio, @PathVariable Integer id){
        Consultorio consultorioActual= consultorioService.findById(id);
        consultorioActual.setDireccion(consultorio.getDireccion());
        consultorioActual.setDepartamento(consultorio.getDepartamento());
        consultorioActual.setMunicipio(consultorio.getMunicipio());
        
        return consultorioService.save(consultorioActual);
        
    }
}

