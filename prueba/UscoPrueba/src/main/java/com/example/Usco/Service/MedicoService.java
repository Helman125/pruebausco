/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.Usco.Service;

import com.example.Usco.Model.Medico;
import java.util.List;

/**
 *
 * @author Helman
 */
public interface MedicoService {
    public List<Medico> findAll();
    public Medico save(Medico medico);
    public Medico findById(Integer id);
    
}
