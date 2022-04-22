/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.Usco.Service;

import com.example.Usco.Model.Paciente;
import java.util.List;

/**
 *
 * @author Helman
 */
public interface PacienteService {
    public List<Paciente> findAll();
    public Paciente save(Paciente paciente);
    public Paciente findById(Integer id);
    
}
