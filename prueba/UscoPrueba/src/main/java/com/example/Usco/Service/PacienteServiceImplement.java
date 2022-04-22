/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.Usco.Service;

import com.example.Usco.Dao.PacienteDao;
import com.example.Usco.Model.Paciente;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author Helman
 */
@Service
public class PacienteServiceImplement implements PacienteService{
    @Autowired
    private PacienteDao pacientedao;
    @Override
    @Transactional(readOnly=true)
    public List<Paciente> findAll(){
        return (List<Paciente>) pacientedao.findAll();
    }
    @Override
     @Transactional(readOnly=false)
    public Paciente save(Paciente paciente){
        return pacientedao.save(paciente);
    }
    @Override
     @Transactional(readOnly=true)
    public Paciente findById(Integer id){
        return pacientedao.findById(id).orElse(null);
    }
}
    
  
